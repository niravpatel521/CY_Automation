describe('My First Test', function() {
    it('Does not do much!', function() {
      cy.visit('/');
      expect(true).to.equal(true)
    })
  
    it('Does not do much too!', function() {
      cy.visit('/');
      expect(true).to.equal(false)
      this.test.attachments = ['E:/CypressLearning/CY_Automation/capture/one.png'];
    })
  })