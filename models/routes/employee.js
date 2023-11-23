const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

/*Employee Routes*/
router.get('/', employeeController.homepage);
router.get('/data', employeeController.data);
router.get('/register', employeeController.register);
router.get('/add', employeeController.addEmployee);
router.post('/add', employeeController.postEmployee);
router.get('/view/:id', employeeController.view);
router.get('/edit/:id', employeeController.edit);
router.put('/edit/:id', employeeController.editPost);
router.delete('/edit/:id', employeeController.deleteEmployee);

router.post('/search', employeeController.searchEmployee);



module.exports = router;