exports.seed = function(knex, Promise){
  return knex.raw('DELETE FROM "dinosaur"; ALTER SEQUENCE dinosaur_id_seq RESTART WITH 6;')
    .then(function() {
      var information = [{
        id:1,
        dinoName:'Asylosaurus',
        period:'Triassic',
        origin:'England',
        herbivore:true,
        heightInFeet:10,
        funFact:'The Asylosaurus derives its name from an interesting anecdote. The word "Asylo" is derived from the Latin word "as-lum", which translates to "safe haven" or "protected" or "unharmed". The remains of the dinosaur were transported to the Yale University in North America during the 1940s. They were stored in a museum which was bombed during the Second World War. The remains now ascribed to the Asylosaurus fortunately survived this attack and therefore were named such. The suffix "-saurus" means "lizard" in Greek. Therefore, Asylosaurus stands for the "Unscathed Lizard." '
      }, {
        id:2,
        dinoName:'Lexovisaurus',
        period:'Jurassic',
        origin:'England, France',
        herbivore:true,
        heightInFeet:17,
        funFact:'The specialty of the particular dinosaur that has isolated them from their other members of the stegosaurus family is that it had hard shoulder spike that protruded from the blades of their shoulder. The spikes attached to the skin are really amazing that the spikes were not attached to the skeleton. This wonderful mechanism of their body made the scientists at a bay. Hence when a fossil of Lexovisaurus is found there is no trace of spikes on the body of the dinosaur as the skin of the Lexovisaurus did not escape natural decay.'
      }, {
        id:3,
        dinoName:'Hainosaurus',
        period:'Cretaceous',
        origin:'Oceans of Europe',
        herbivore:false,
        heightInFeet:45,
        funFact:'The Hainosaurus was amongst the largest marine creatures of the late Cretaceous period and also one of the biggest aquatic vertebrates of all times. It was a dreaded predator and probably the strongest of its time. The discovery of the Hainosaurus helped locate the place of other Mosasaurs like the Tylosaurus in the taxonomic tree.'
      }, {
        id:4,
        dinoName:'Falcarius',
        period:'Cretaceous',
        origin:'North America',
        herbivore:true,
        heightInFeet:12,
        funFact:'The Falcarius was a herbivorous reptile. This is unusual for theropods as most of them were meat eating dinosaurs. Some scientists suggest that the Falcarius could have been a transitional species showing omnivorous feeding habits, but its teeth seemed better adapted for a plant based diet.'
      }, {
        id:5,
        dinoName:'Futabasaurus',
        period:'Cretaceous',
        origin:'Japan',
        herbivore:false,
        heightInFeet:21,
        funFact:'The name Futabasaurus, was coined by David Lambert in the year 1990 as a conversion from the Japanese nickname for an unidentified theropod, "Futaba-ryu". Many believe, that continuous hunting by the pre-historic sharks was a prime factor behind their extinction.'
      }]
      return knex('dinosaur').insert(information)
    })
}
