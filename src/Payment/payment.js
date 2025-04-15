document.addEventListener('DOMContentLoaded', () => {
    const paymentMethodSelect = document.getElementById('paymentMethod');
    const cardDetails = document.getElementById('cardDetails');
    const upiDetails = document.getElementById('upiDetails');
    const netBankingDetails = document.getElementById('netBankingDetails');
    const emiDetails = document.getElementById('emiDetails');
    const payButton = document.getElementById('payButton');
    const paymentResult = document.getElementById('paymentResult');

    paymentMethodSelect.addEventListener('change', () => {
        cardDetails.style.display = 'none';
        upiDetails.style.display = 'none';
        netBankingDetails.style.display = 'none';
        emiDetails.style.display = 'none';

        if (paymentMethodSelect.value === 'creditCard' || paymentMethodSelect.value === 'debitCard') {
            cardDetails.style.display = 'block';
        } else if (paymentMethodSelect.value === 'upi') {
            upiDetails.style.display = 'block';
        } else if (paymentMethodSelect.value === 'netBanking') {
            netBankingDetails.style.display = 'block';
        } else if (paymentMethodSelect.value === 'emi') {
            emiDetails.style.display = 'block';
        }
    });

    payButton.addEventListener('click', () => {
        paymentResult.textContent = 'Processing...';

        setTimeout(() => {
            const success = Math.random() > 0.5; // Simulate success/failure

            if (success) {
                paymentResult.textContent = 'Payment Successful!';
            } else {
                paymentResult.textContent = 'Payment Failed. Please try again.';
            }
        }, 2000); // Simulate processing time
    });
});