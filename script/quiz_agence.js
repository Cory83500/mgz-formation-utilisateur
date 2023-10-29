document.addEventListener("DOMContentLoaded", function () {
    // Écoutez le clic sur le bouton "Soumettre"
    document.getElementById("submit-button").addEventListener("click", function (e) {
      // Récupérez les réponses et réinitialisez les radios
      const answers = [];
      answers.push(document.querySelector('input[name="q1"]:checked'));
      answers.push(document.querySelector('input[name="q2"]:checked'));
      answers.push(document.querySelector('input[name="q3"]:checked'));
      answers.push(document.querySelector('input[name="q4"]:checked'));
      answers.push(document.querySelector('input[name="q5"]:checked'));
  
      // Vérifiez si au moins une question n'a pas de réponse
      const isAnyQuestionUnanswered = answers.some((answer) => !answer);
  
      if (isAnyQuestionUnanswered) {
        e.preventDefault(); // Empêche l'envoi du formulaire
  
        // Affichez un message d'attention
        alert("Attention, veuillez répondre à toutes les questions avant de soumettre le formulaire.");
      } else {
        // Réponses correctes
        const correctAnswers = ["configuration", "oui", "cas_1", "ajouter", "configuration"];
  
        // Calculez le score
        let correctCount = 0;
        for (let i = 0; i < answers.length; i++) {
          if (answers[i].value === correctAnswers[i]) {
            correctCount++;
          }
        }
  
        // Score en pourcentage
        const score = (correctCount / correctAnswers.length) * 100;
  
        // Réinitialisez les radios seulement si toutes les questions ont été correctement répondues
        const radioButtons = document.querySelectorAll('input[type="radio"]');
        if (correctCount === answers.length) {
          radioButtons.forEach(function (radioButton) {
            radioButton.checked = false;
          });
        }
  
        // Affichez les erreurs et les bonnes réponses
        const errorsContainer = document.getElementById("errors-container");
        const errorsList = document.getElementById("errors-list");
        const correctAnswersContainer = document.getElementById("correct-answers-container");
  
        // Réinitialisez les conteneurs d'erreurs et de bonnes réponses
        errorsList.innerHTML = "";
        correctAnswersContainer.innerHTML = "";
  
        // Parcourez les réponses de l'utilisateur et vérifiez les erreurs
        for (let i = 0; i < answers.length; i++) {
          if (answers[i].value !== correctAnswers[i]) {
            const errorItem = document.createElement("li");
            errorItem.textContent = `Question ${i + 1}: Vous avez répondu "${answers[i].value}", la réponse correcte était "${correctAnswers[i]}".`;
            errorsList.appendChild(errorItem);
          }
        }
  
        // Affichez les erreurs si des erreurs existent
        if (errorsList.children.length > 0) {
          errorsContainer.style.display = "block";
        }
  
        // Affichez également les bonnes réponses
        const correctAnswersTitle = document.createElement("h3");
        correctAnswersTitle.textContent = "Réponses correctes :";
  
        const correctAnswersList = document.createElement("ul");
        for (let i = 0; i < correctAnswers.length; i++) {
          const correctAnswerItem = document.createElement("li");
          correctAnswerItem.textContent = `Question ${i + 1}: ${correctAnswers[i]}`;
          correctAnswersList.appendChild(correctAnswerItem);
        }
  
        correctAnswersContainer.appendChild(correctAnswersTitle);
        correctAnswersContainer.appendChild(correctAnswersList);
  
        // Faites défiler la page vers le résultat
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
          messageImageSrc = "./asset/logo_mgz.jpeg";
        } else if (score >= 50) {
          messageText = `👏 Bien, vous avez ${score}% de bonnes réponses ! Attention, il semble que vous ayez compris le cours dans son ensemble. N'hésitez pas à revenir sur les points qui vous semblent flous.`;
          messageImageSrc = "./asset/logo_mgz.jpeg";
        } else {
          messageText = `⚠️ Attention, votre score est de ${score}% ! Mais rien n'est grave, nous vous conseillons de revoir le cours pour améliorer votre score.`;
          messageImageSrc = "./asset/logo_mgz.jpeg";
        }
        message.textContent = messageText;
        messageImage.src = messageImageSrc;
  
        // Mettez à jour la classe de l'élément #message en fonction du score
        if (score < 50) {
          message.classList.add("below-50");
        } else {
          message.classList.add("above-50");
        }
      }
    });
  });
  