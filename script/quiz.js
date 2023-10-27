document.addEventListener("DOMContentLoaded", function() {
  // Écoutez le clic sur le bouton "Soumettre"
  document.getElementById("submit-button").addEventListener("click", function(e) {
    // Récupérez les réponses et réinitialisez les radios
    const answers = [];
    answers.push(document.querySelector('input[name="q1"]:checked'));
    answers.push(document.querySelector('input[name="q2"]:checked'));
    answers.push(document.querySelector('input[name="q3"]:checked'));
    answers.push(document.querySelector('input[name="q4"]:checked'));
    answers.push(document.querySelector('input[name="q5"]:checked'));

    // Réinitialisez les radios
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(function(radioButton) {
      radioButton.checked = false;
    });

    // Vérifiez si au moins une question n'a pas de réponse
    const isAnyQuestionUnanswered = answers.some((answer) => !answer);

    if (isAnyQuestionUnanswered) {
      e.preventDefault(); // Empêche l'envoi du formulaire

      // Affichez un message d'attention
      alert("Attention, veuillez répondre à toutes les questions avant de soumettre le formulaire.");
    } else {
      // Réponses correctes
      const correctAnswers = ["interne", "administrateur", "enseignant", "oui", "oui"];

      // Calculez le score
      let correctCount = 0;
      for (let i = 0; i < answers.length; i++) {
        if (answers[i].value === correctAnswers[i]) {
          correctCount++;
        }
      }

      // Score en pourcentage
      const score = (correctCount / correctAnswers.length) * 100;

      // Faites défiler la page vers le score
      const messageContainer = document.getElementById("message-container");
      messageContainer.style.display = "block";
      messageContainer.scrollIntoView({ behavior: "smooth" });

      // Montrez le message et les boutons
      const message = document.getElementById("message");
      const homeButton = document.getElementById("home-button");
      const previousQuizButton = document.getElementById("previous-quiz-button");
      const retryQuizButton = document.getElementById("retry-quiz-button");
      const messageImage = document.getElementById("message-image");

      let messageText = "";
      let messageImageSrc = "";

      if (score >= 70) {
        messageText = `👏 Bravo, votre score est de ${score}% ! Vous avez compris cette leçon.`;
        messageImageSrc = "./asset/logo mgz.jpeg";
      } else if (score >= 50) {
        messageText = `👏 Bien, vous avez ${score}% de bonnes réponses ! Attention, il semble que vous ayez compris le cours dans son ensemble. N'hésitez pas à revenir sur les points qui vous semblent flous.`;
        messageImageSrc = "./asset/logo mgz.jpeg";
      } else {
        messageText = `⚠️ Attention, votre score est de ${score}% ! Mais rien n'est grave, nous vous conseillons de revoir le cours pour améliorer votre score.`;
        messageImageSrc = "./asset/logo mgz.jpeg";
      }
      message.textContent = messageText;
      messageImage.src = messageImageSrc;
    }
  });
});
