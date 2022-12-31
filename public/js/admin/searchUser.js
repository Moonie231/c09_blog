
const searchUser = (value) => {
    axios.get('/admin/search-user', {
        params:{
            keyword: value
        }
    }).then (res =>{
        let user = res.data;
        let html = '';
        console.log(user)
        user.forEach((user, index) => {
            html += '<tr>';
            html += `<td>${index + 1} </td>`;
            html += `<td>${user.name}</td>`;
            html += `<td>${user.email}</td>`;
            html += `<td>${user.status}</td>`;
            html += `<td>`
            html +=`<a onclick="return confirm('Are you sure you want to delete this user?')" href="/admin/delete-product/${user._id}/" class="btn btn-danger">Delete</a></td>`;
            if (user.status === 'active') {
                html +=`<a onclick="return confirm('Are you sure you want to lock this user?')" href="#" class="btn btn-danger">Lock</a></td>`;
            }
            html += '</tr>';
        })

        document.getElementById('list-user').innerHTML = html;
    })
}