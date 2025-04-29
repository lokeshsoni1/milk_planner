document.addEventListener('DOMContentLoaded', function () {
    const generateBillBtn = document.querySelector('.generate-bill-btn');
    const billModal = document.getElementById('billModal');
    const closeBtn = document.querySelector('.close-btn');
    const fab = document.querySelector('.fab');
    const plannerForm = document.getElementById('plannerForm');
  
    generateBillBtn.addEventListener('click', function () {
      const milkType = document.getElementById('milkType').value;
      const quantity = document.getElementById('quantity').value;
      const cost = document.getElementById('cost').value;
  
      if (!quantity || !cost) {
        alert("Please fill in all fields.");
        return;
      }
  
      const totalCost = quantity * cost;
  
      const billContent = `
        <p><strong>Milk Type:</strong> ${milkType.charAt(0).toUpperCase() + milkType.slice(1)} Milk</p>
        <p><strong>Quantity:</strong> ${quantity} Liters</p>
        <p><strong>Cost per Liter:</strong> ₹${cost}</p>
        <p><strong>Total Cost:</strong> ₹${totalCost}</p>
      `;
      billModal.querySelector('.modal-content p').innerHTML = billContent;
      billModal.style.display = 'flex';
    });
  
    closeBtn.addEventListener('click', function () {
      billModal.style.display = 'none';
    });
  
    fab.addEventListener('click', function () {
      plannerForm.scrollIntoView({ behavior: 'smooth' });
    });
  });
  