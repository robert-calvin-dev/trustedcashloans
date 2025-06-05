function insertHeader() {
  const headerHTML = `
<section class="header-wrapper" style="display: flex; justify-content: space-between; align-items: center; padding: 40px 60px; background: white;">
  <div class="logo-tagline">
    <a href="https://trustedcashloans.com">
      <img src="/assets/images/header-logo-tagline.png" alt="Trusted Cash Loans Logo and Tagline" style="width: 80%; height: auto;">
    </a>
  </div>
    <form id="newsletterForm style="display: flex; flex-direction: column; align-items: flex-end;">

     <h3 style="margin: 0; text-align: center; font-size: 1.3em; color: #0c3d6b;">Stay Informed</h3>
    <p style="margin: 5px 0 15px; font-size: 1em; color: #5a6b7b;">Get survival finance tips straight to your inbox.</p>

      <input type="email" name="email" placeholder="Enter your email" required style="padding: 10px 14px; border: 1px solid #ccc; border-radius: 6px; font-size: 1em;">
      <button type="submit" style="background-color:rgba(2, 136, 0, 0.76); color: white; border: none; padding: 10px 16px; border-radius: 6px; font-weight: bold; font-size: 1em; cursor: pointer;">Subscribe</button>
    </form>

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
</footer>
<div style="background-color: white; padding: 15px; border: 1px solid black; color: black;" class="footer-legal">
  <p style="text-align: center;" >© 2025 <strong>Trusted Cash Loans</strong>. All Rights Reserved.</p>

  <h2 style="text-align: center; font-size: 16px; margin-top: 20px;">Important Disclosures</h2>
  <p><strong>Trusted Cash Loans</strong> is <em>not</em> a direct lender, <em>does not</em> provide lending services, and <em>does not</em> make credit decisions. We are a referral and marketing platform that connects consumers with third-party lenders and financial service providers. We are <em>not</em> an agent, broker, or representative of any lender. Loan offers are not available in all jurisdictions, and submitting your information does <em>not</em> guarantee loan approval or funding.</p>

  <p>This website’s sole purpose is to provide lenders and financial partners with information about prospective borrower inquiries. We may receive compensation from lenders and/or network partners for referrals, lead generation, and aggregation services.</p>

  <h2 style="text-align: center; font-size: 16px; margin-top: 20px;">Loan Information & Limitations</h2>
  <p>Loan approval, funding timelines, maximum loan amounts, and interest rates are determined solely by individual lenders, based on their internal policies and your creditworthiness. Not all lenders offer loans up to $50,000. Loan durations range from 61 days to 72 months. APRs vary by lender and product, ranging from 4.99% to 699%. Additional documentation or faxing may be required in some cases. All loan products are subject to availability and applicable federal, provincial, or state regulations.</p>

  <p>Each lender has its own terms and renewal policies. You must review your specific loan agreement for full details. Missed or late payments may incur additional fees or trigger collection activity. <strong>Trusted Cash Loans</strong> does not control these fees or the enforcement process.</p>

  <h2 style="text-align: center; font-size: 16px; margin-top: 20px;">Eligibility Requirements</h2>
  <p>By using this site, you confirm that you are at least 18 years old, a legal resident of the United States or Canada, and are not located in any jurisdiction where such loan products are prohibited.</p>

  <h2 style="text-align: center; font-size: 16px; margin-top: 20px;">Legal Compliance</h2>
  <p>This website is operated by <strong>Trusted Cash Loans</strong> in accordance with the laws of the United States and Canada. Use of this site implies full acceptance of our 
    <a href="/termsandconditions/" style="color: #0066cc;">Terms & Conditions</a>, 
    <a href="/privacypolicy/" style="color: #0066cc;">Privacy Policy</a>, and all applicable disclosures. 
    You consent to electronic communications and TCPA-authorized contact, including autodialed or prerecorded calls and SMS messages.</p>



</div>
  <h2 style=" display: none;font-size: 16px; margin-top: 20px;">Keywords</h2>
  <p style=" display: none; color: #666;">
    payday loans, emergency loans, bad credit loans, personal installment loans, online loan application, fast cash, no fax loans, same-day funding, direct lender network, online financial services, USA payday loans, Canada payday loans, loan approval online, apply now for cash advance.
  </p>

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

 document.getElementById("lessThan12Months").addEventListener("change", function () {
  const section = document.getElementById("previousAddressSection");
  section.style.display = this.checked ? "block" : "none";
});
document.getElementById("lessThan12Months").addEventListener("change", function () {
  document.getElementById("previousAddressSection").style.display = this.checked ? "block" : "none";
});

// Show/hide student info based on employment type
document.getElementById("employmentType").addEventListener("change", function () {
  const studentSection = document.getElementById("studentInfoSection");
  studentSection.style.display = this.value === "Student" ? "block" : "none";
});


