class Security {

    constructor(){

        // Add code to create the input and button elements
           this.access1 = createInput("code1");
           this.access1.position(100,90);
           this.access1.style('background', 'white');


           this.access2 = createInput("code1");
           this.access2.position(100,290);
           this.access2.style('background', 'white');



           this.access3 = createInput("code1");
           this.access3.position(700,190);
           this.access3.style('background', 'white');

    }

    display(){

        // Add code to make the buttons function as expecte
        this.button1 = createButton('check');
        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey');


        this.button1.mousePressed(() => {
            if(system.authentication(accessCode1,this.access1.value())){
              this.button1.hide();
              this.access1.hide();

            }
        });




        this.button2 = createButton('check');
        this.button2.position(100,323);
        this.button2.style('background', 'lightgrey');


        this.button2.mousePressed(() => {
            if(system.authentication(accessCode2,this.access2.value())){
              this.button2.hide();
              this.access2.hide();

            }
        });





        this.button3 = createButton('check');
        this.button3.position(700,223);
        this.button3.style('background', 'lightgrey');


        this.button3.mousePressed(() => {
            if(system.authentication(accessCode3,this.access3.value())){
              this.button3.hide();
              this.access3.hide();

            }
        });


    }
}