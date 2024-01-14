import React from 'react';

function About() {
  return (
    <div className="bg-gray-100 font-sans">
      <div className="text-center mt-8">
        <h1 className="text-center text-3xl mt-8 text-gray-800" id="about">
          About Me
        </h1>
        <div className="h-1.5 w-10 bg-yellow-500 mx-auto mt-4 mb-8" />
      </div>

      <div className="max-w-3xl mx-auto text-gray-700">
        {/* <h2 className="text-xl md:text-2xl lg:text-3xl mb-4 font-bold " style={{ fontFamily: 'Signika Negative, sans-serif' }}>
          Meet Dr. Daisy Mwebi
        </h2>

        <p className="text-base md:text-lg lg:text-xl text-justify mb-8">
          Greetings, fellow Earthlings! I'm Dr. Daisy Mwebi, your certified happiness engineer and resident wizard of well-being. Imagine a place where therapy sessions feel like stepping into a confetti-filled adventure – that's exactly what you get when you're under the magical guidance of yours truly.
        </p> */}

        <h3 className="text-xl md:text-2xl lg:text-3xl mb-4 font-bold" style={{ fontFamily: 'Signika Negative, sans-serif' }}>
          The Quest for Mental Marvels
        </h3>
        <p className="text-base md:text-lg lg:text-xl text-justify mb-8">
        In the illustrious quest for mental marvels, I, Dr. Daisy Mwebi, invite you to join me on a whimsical journey through the enchanted realms of self-discovery and positivity. Armed with my Masters in Social Work from McMaster University, I have spent the past 14 years refining my magical skills to conquer the dragons of despair and unravel the mysteries of the marvelous human mind.
        </p>

        <h3 className="text-xl md:text-2xl lg:text-3xl mb-4 font-bold" style={{ fontFamily: 'Signika Negative, sans-serif'  }}>
          Why Choose Dr. Daisy Mwebi?
        </h3>
        <ul className="text-base md:text-lg lg:text-xl text-justify mb-8">
          <li>
            <span className="font-bold">The Laughter Laboratory:</span> My office is not just a safe space; it's a laughter laboratory where we conduct experiments in joy and brew potions of positivity. Spoiler alert: the concoctions usually involve a pinch of laughter and a dash of genuine understanding.
          </li>
          <li>
            <span className="font-bold">Whimsical Wisdom:</span> I firmly believe in the power of whimsical wisdom. Expect therapy sessions filled with metaphors, analogies involving magical creatures, and the occasional interpretative dance (only if you're comfortable, of course).
          </li>
          <li>
            <span className="font-bold">Telepathic Tea Readings:</span> Okay, maybe not telepathic, but during our sessions, I can predict your tea preferences with uncanny accuracy. Earl Grey enthusiasts, beware – I'm onto you!
          </li>
        </ul>

        <h3 className="text-xl md:text-2xl lg:text-3xl mb-4 font-bold" style={{ fontFamily: 'Signika Negative, sans-serif'  }}>
          Credentials (The Academic Spellbook)
        </h3>
        <p className="text-base md:text-lg lg:text-xl text-justify mb-8">
          My academic spellbook includes a Masters in Social Work from McMaster University. I've also completed advanced courses in Navigating Nargles (stress management) and Befriending Blast-Ended Skrewts (dealing with challenging personalities).
        </p>

        <h3 className="text-xl md:text-2xl lg:text-3xl mb-4 font-bold" style={{ fontFamily: 'Signika Negative, sans-serif'  }}>
          Fun Facts About Dr. Daisy Mwebi
        </h3>
        <ul className="text-base md:text-lg lg:text-xl text-justify mb-8">
          <li>Fluent in multiple dialects of giggles.</li>
          <li>Successfully transformed a grumpy cat into a purring philosopher during a pet therapy session.</li>
          <li>Can do a near-perfect impression of a contented sloth – just ask!</li>
        </ul>

        <h3 className="text-xl md:text-2xl lg:text-3xl mb-4 font-bold" style={{ fontFamily: 'Signika Negative, sans-serif' }}>
          Join the Joyful Journey
        </h3>
        <p className="text-base md:text-lg lg:text-xl text-justify mb-8">
          If you're ready to embark on a whimsical journey to rediscover joy, sprinkle a bit of magic on your mental well-being, and maybe learn a spell or two for coping with everyday enchantments, you've found the right wizard.
        </p>

        <p className="text-base md:text-lg lg:text-xl text-justify mb-8">
          I'm not just a psychologist; I'm your partner in joy, your laughter ally, and your guide through the enchanted forest of self-discovery. So, grab your imaginary wizard hat, and let's make some magic together!
        </p>

        <p className="text-base md:text-lg lg:text-xl text-justify mb-8">
          Wishing you joy and wonder,
          <br />
          Dr. Daisy Mwebi
        </p>
      </div>
    </div>
  );
}

export default About;
