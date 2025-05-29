function insertHeader() {
  const headerHTML = `
<section class="header-wrapper" style="display: flex; justify-content: space-between; align-items: center; padding: 40px 60px; background: white;">
  <div class="logo-tagline">
    <a href="https://trustedcashloans.com">
      <img src="/assets/images/header-logo-tagline.png" alt="Trusted Cash Loans Logo and Tagline" style="height: 160px;">
    </a>
  </div>
  <div class="newsletter-form" style="display: flex; flex-direction: column; align-items: flex-end; max-width: 480px;">
    <h3 style="margin: 0; text-align: center; font-size: 1.3em; color: #0c3d6b;">Stay Informed</h3>
    <p style="margin: 5px 0 15px; font-size: 1em; color: #5a6b7b;">Get survival finance tips straight to your inbox.</p>
    <form id="newsletterForm">    
      <input type="email" name="email" placeholder="Enter your email" required style="padding: 10px 14px; border: 1px solid #ccc; border-radius: 6px; font-size: 1em;">
      <button type="submit" style="background-color:rgba(2, 136, 0, 0.76); color: white; border: none; padding: 10px 16px; border-radius: 6px; font-weight: bold; font-size: 1em; cursor: pointer;">Subscribe</button>
    </form>
  </div>
</section>
`;

  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('header').innerHTML = headerHTML;

    const form = document.getElementById('newsletterForm');
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const email = form.email.value;

      fetch('https://hook.us2.make.com/p283ffvlmlywyapwmm6oq3riyulay98b', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      .then(() => {
        alert('Subscribed!');
        form.reset();
      })
      .catch(() => {
        alert('Something went wrong. Please try again.');
      });
    });
  });
}
function insertFooter() {
 const footerHTML = `
<footer>
  <div class="footer">
  <nav>
    <a href="/about/">About Trusted Cash Loans</a>
    <a href="/how-it-works/">How It Works</a>
    <a href="/paydayloans/">Trusted Cash Payday Loans</a>
    <a href="/personalloans/">Trusted Cash Personal Loans</a>
    <a href="/contact/">Contact Trusted Cash Loans</a>
  </nav>
  <nav>
    <a href="/blog/">Blog</a>
    <a href="/faq/">FAQ</a>
    <a href="/state-laws/">State Laws</a>
    <a href="/legalstuff/">Legal Stuff</a>
  </nav>

</div>
<div class="footer-legal">
  <p style="font-size: 0.65rem; color: #999999e0; line-height: 1.5;">
    © 2025 Trusted Cash Loans. All Rights Reserved.<br>
    Trusted Cash Loans is not a direct lender and does not provide lending services. We are a loan referral and marketing platform that connects consumers with third-party lenders and financial service providers. Submitting your information on this site does not guarantee loan approval or funding. Loan approval and terms are determined by the individual lenders and may vary based on creditworthiness, residency, and applicable state or provincial law.<br><br>

    All loan products are subject to availability and applicable federal, provincial, and state regulations. APRs range from 4.99% to 699% depending on the lender and product. Short-term, payday, and installment loans are not available in all jurisdictions. Loan durations range from 61 days to 72 months. Borrow responsibly—failure to repay may result in collection activity. Trusted Cash Loans is not responsible for lender decisions, credit checks, loan terms, or payment processing. This site does not constitute legal, financial, or tax advice.<br><br>

    This website is operated in accordance with the laws of the United States and Canada. By using this site, you agree to our <a href="/termsandconditions/">Terms & Conditions</a>, <a href="/privacypolicy/">Privacy Policy</a>, and all applicable disclosures. Usage of this site implies full consent to electronic communication and TCPA contact, including auto-dialed and pre-recorded calls or SMS.<br><br>

    Keywords: payday loans, emergency loans, bad credit loans, personal installment loans, online loan application, fast cash, no fax loans, same-day funding, direct lender network, online financial services, USA payday loans, Canada payday loans, loan approval online, apply now for cash advance.
  </p>
</div>
</footer>
 `;
 document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('footer').innerHTML = footerHTML;
 })};

 function insertReviews() {
  const reviewHTML = `
      <h4 style="text-align:center;">Why Our Customers Love Us</h4>

    <section class="testimonials">
      <img src="/assets/images/dean-review.png" alt="Dean Testimonial">
      <img src="/assets/images/reba-review.png" alt="Reba Testimonial">
      <img src="/assets/images/patrick-review.png" alt="Patrick Testimonial">
    </section>
  
  `;
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('reviews').innerHTML = reviewHTML;
  })
 }




 insertHeader();
 insertFooter();
 insertReviews(); 



