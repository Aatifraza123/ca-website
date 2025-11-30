const Consultation = require('../models/Consultation');
const nodemailer = require('nodemailer');

// @desc    Submit consultation request
// @route   POST /api/consultations
// @access  Public
const createConsultation = async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    console.log('📋 NEW CONSULTATION REQUEST');
    console.log('Data:', { name, email, phone, service });

    // Validation
    if (!name || !email || !phone || !service) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: name, email, phone, and service'
      });
    }

    // Clean phone number
    const cleanPhone = phone.replace(/\D/g, '');

    // Create consultation
    const consultation = await Consultation.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: cleanPhone,
      service: service.trim(),
      message: message ? message.trim() : ''
    });

    console.log('✅ Consultation saved:', consultation._id);

    // Send response immediately (BEFORE any email operations)
    res.status(201).json({
      success: true,
      message: 'Consultation request submitted successfully! We will contact you within 24 hours.',
      data: {
        id: consultation._id,
        name: consultation.name,
        service: consultation.service
      }
    });

    // Send emails in next event loop tick (completely non-blocking)
    setImmediate(() => {
      console.log('📧 Starting email sending process for consultation:', consultation._id);
      sendConsultationEmails(consultation)
        .then(() => {
          console.log('✅ Consultation emails sent successfully');
        })
        .catch(err => {
          console.error('❌ Email sending failed (non-blocking):', err);
        });
    });
  } catch (error) {
    console.error('❌ Consultation error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to submit consultation request'
    });
  }
};

// @desc    Get all consultations
// @route   GET /api/consultations
// @access  Private/Admin
const getConsultations = async (req, res) => {
  try {
    const consultations = await Consultation.find()
      .sort({ createdAt: -1 })
      .select('-__v');

    res.json({
      success: true,
      count: consultations.length,
      data: consultations
    });
  } catch (error) {
    console.error('❌ Get consultations error:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get single consultation
// @route   GET /api/consultations/:id
// @access  Private/Admin
const getConsultationById = async (req, res) => {
  try {
    const consultation = await Consultation.findById(req.params.id);

    if (!consultation) {
      return res.status(404).json({
        success: false,
        message: 'Consultation not found'
      });
    }

    res.json({
      success: true,
      data: consultation
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Update consultation status
// @route   PATCH /api/consultations/:id
// @access  Private/Admin
const updateConsultation = async (req, res) => {
  try {
    const { status } = req.body;

    const consultation = await Consultation.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!consultation) {
      return res.status(404).json({
        success: false,
        message: 'Consultation not found'
      });
    }

    res.json({
      success: true,
      message: 'Consultation updated successfully',
      data: consultation
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Delete consultation
// @route   DELETE /api/consultations/:id
// @access  Private/Admin
const deleteConsultation = async (req, res) => {
  try {
    const consultation = await Consultation.findByIdAndDelete(req.params.id);

    if (!consultation) {
      return res.status(404).json({
        success: false,
        message: 'Consultation not found'
      });
    }

    res.json({
      success: true,
      message: 'Consultation deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Helper function to send emails
const sendConsultationEmails = async (consultation) => {
  console.log('📧 sendConsultationEmails called for:', consultation._id);
  
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('⚠️ Email credentials not configured');
    console.log('EMAIL_USER exists:', !!process.env.EMAIL_USER);
    console.log('EMAIL_PASS exists:', !!process.env.EMAIL_PASS);
    return;
  }

  try {
    console.log('📧 Creating email transporter...');
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      pool: false,
      connectionTimeout: 10000,
      greetingTimeout: 5000,
      socketTimeout: 10000
    });

    // Verify transporter
    console.log('📧 Verifying email transporter...');
    await transporter.verify();
    console.log('✅ Email transporter verified successfully');

    // Admin notification email
    const adminEmail = {
      from: `"CA Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Consultation: ${consultation.service} - ${consultation.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0B1530; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">New Consultation Request</h2>
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${consultation.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${consultation.email}">${consultation.email}</a></p>
            <p><strong>Phone:</strong> ${consultation.phone}</p>
            <p><strong>Service:</strong> ${consultation.service}</p>
            ${consultation.message ? `<p><strong>Message:</strong><br>${consultation.message.replace(/\n/g, '<br>')}</p>` : ''}
          </div>
          <div style="margin-top: 20px; padding: 10px; background: #f5f5f5; border-left: 3px solid #0B1530;">
            <small>Ref: ${consultation._id}</small><br>
            <small>Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</small>
          </div>
        </div>
      `
    };

    // Customer confirmation email (Auto-reply)
    const customerEmail = {
      from: `"CA Associates" <${process.env.EMAIL_USER}>`,
      to: consultation.email,
      subject: `Consultation Request Received - ${consultation.service}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0B1530; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">Thank You!</h2>
          <p>Dear ${consultation.name},</p>
          <p>Thank you for choosing <strong>CA Associates</strong>. We have received your consultation request for <strong>${consultation.service}</strong>.</p>
          <div style="margin: 20px 0; padding: 15px; background: #f9f9f9; border-left: 3px solid #0B1530;">
            <p style="margin: 0;"><strong>Your Service Request:</strong></p>
            <p style="margin: 10px 0 0 0;">${consultation.service}</p>
            ${consultation.message ? `<p style="margin: 10px 0 0 0;"><strong>Your Message:</strong> ${consultation.message.replace(/\n/g, '<br>')}</p>` : ''}
          </div>
          <p>Our team will contact you at <strong>${consultation.phone}</strong> within 24 hours to discuss your requirements.</p>
          <p><strong>Contact Information:</strong></p>
          <p>Email: ${process.env.EMAIL_USER}<br>
          Hours: Mon-Fri, 9am - 6pm IST</p>
          <p>Best regards,<br><strong>CA Associates Team</strong></p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <small style="color: #666;">CA Associates - Professional Tax & Financial Services</small>
        </div>
      `
    };

    // Send admin email
    console.log('📧 Sending admin notification email to:', process.env.EMAIL_USER);
    const adminResult = await transporter.sendMail(adminEmail);
    console.log('✅ Admin email sent successfully:', adminResult.messageId);

    // Send customer auto-reply email
    console.log('📧 Sending customer auto-reply email to:', consultation.email);
    const customerResult = await transporter.sendMail(customerEmail);
    console.log('✅ Customer auto-reply email sent successfully:', customerResult.messageId);

    console.log('✅ Both consultation emails sent successfully');
  } catch (error) {
    console.error('❌ Email sending error:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response
    });
    throw error; // Re-throw to be caught by caller
  }
};

module.exports = {
  createConsultation,
  getConsultations,
  getConsultationById,
  updateConsultation,
  deleteConsultation
};







