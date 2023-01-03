
const searchBlog1 = (value) => {
    axios.get('/user/search-blog', {
        params:{
            keyword: value
        }
    }).then (res =>{
        let blog = res.data;
        let html = '';
        console.log(blog)
        blog.forEach((item, index) => {
            html += '<tr>';
            html += `<td><a href="/user/blog/${ item._id}">${index + 1} </a></td>`;
            html += `<td><a href="/user/blog/${ item._id}">${item.date}</a></td>`;
            html += `<td><a href="/user/blog/${ item._id}">${item.title}</a></td>`;
            html += `<td><a href="/user/blog/${ item._id}"><img src="/image/upload/${item.image}"></a></td>`;
            html += `<td><a href="/user/blog/${ item._id}">${item.status}</a></td>`;
            html += `<td>`
            html +=`<a  href="/user/update-blog/${item._id}" class="btn btn-primary">Update</a></td>`;
            html +=`<a onclick="return confirm('Are you sure you want to delete this blog?')" href="/admin/delete-blog/${item._id}" class="btn btn-danger">Delete</a></td>`;
            html += '</tr>';
        })

        document.getElementById('list-blog').innerHTML = html;
    })
}