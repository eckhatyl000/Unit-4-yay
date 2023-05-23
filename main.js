<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

complimentBtn.addEventListener('click', getCompliment)
const fortuneButton = document.querySelector('#fortune-button');

const getFortune = () => {
    axios.get('http://localhost:4000/api/fortune')
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

fortuneButton.addEventListener('click', getFortune);

$('form').on('submit', function (event) {
    event.preventDefault();

    var newName = $('#name').val();
    var newEmail = $('#email').val();

    $.ajax({
        url: '/api/users/' + userId,
        method: 'PUT',
        data: {
            name: newName,
            email: newEmail
        },
        success: function (response) {
            alert(response);
        },
        error: function (xhr, status, error) {
            console.error(error);
            alert('Error updating user');
        }
    });
});

const createResource = (resource) => {
    return axios.post('/resources', resource)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
};

const newResource = { name: 'New Resource' };
createResource(newResource);


axios.delete('http://localhost:4000/api/users/1')
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.error(err);
    });
