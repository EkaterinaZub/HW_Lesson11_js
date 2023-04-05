"Use strict"

const contact = {
    id: '1',
    name: 'Kati',
    email: 'kati@gmail.com',
    address: 'Minsk',
    phone: '45678818',

}
const contact2 = {
    id: '2',
    name: 'Refa',
    email: 'Refa@gmail.com',
    address: 'Minsk',
    phone: '4546365468',

}

class User {
    constructor(user) {
        this.data = user;

    }

    editData(newUser) {
        this.data = newUser;

    }

    getUser() {
        return this.data;
    }
}

let user = new User(contact);

// console.log(user);
// user.editData(contact);
// console.log(user);
// console.log(user.getUser());


class Contacts {
    constructor() {
        this.data = []
    }

    add(contact) {
        const newContact = new User(contact)
        this.data = [...this.data, newContact.data]
    }

    edit(id, data) {
        const contakts = this.data.map(element => {
            if (element.id === id) {
                return { ...element, ...data }
            }
            return element
        })
        user.editData.call(this, contakts)
        // console.log(contakts)
    }
    remove(id) {
        return this.data = this.data.filter(element => element.id !== id)
    }

    get() {
        return this.data
    }
}

const contacts = new Contacts()
// console.log(contacts)
// contacts.add(contact)
// contacts.add(contact2)
// contacts.edit('1', { name: 'Krol' })
// contacts.edit('2',{address: 'Mogilew'})
// console.log(contacts)
// contacts.remove('1')
// console.log(contacts.get())

class ContactsApp extends Contacts {
    constructor() {
        super();
        this.app()
        this.onRemove()
        this.onEdit()
        // this.get()

    }


    app() {

        const container = document.createElement('form')
        container.className = 'container';
        const body = document.querySelector('body')
        console.log(body)
        body.prepend(container)

        
        const input = document.createElement('input');
        for (let i = 1; i <= 5; i++) {
            const input = document.createElement('input');
            input.className = 'input';
            input.setAttribute('type', 'text');
            input.innerHTML;
            container.prepend(input);
        }

        const header = document.createElement('div')
        header.className = 'header__list';
        header.innerHTML = 'Создать контакт'
        const divHeader = document.querySelector('.container')
        console.log(divHeader)
        container.prepend(header)

        const arrayinput = document.querySelectorAll('.input');
        console.log(arrayinput);
        arrayinput[0].setAttribute('name', 'id')
        arrayinput[1].setAttribute('name', 'name')
        arrayinput[2].setAttribute('name', 'email')
        arrayinput[3].setAttribute('name', 'address')
        arrayinput[4].setAttribute('name', 'phone')
        arrayinput[0].setAttribute('placeholder', 'id')
        arrayinput[1].setAttribute('placeholder', 'name')
        arrayinput[2].setAttribute('placeholder', 'email')
        arrayinput[3].setAttribute('placeholder', 'address')
        arrayinput[4].setAttribute('placeholder', 'phone')

        const button = document.createElement('button')
        button.className = 'button';
        button.innerHTML = 'Отправить'
        container.append(button)
        console.log(button)
       
        container.addEventListener("submit", (event) => {
            event.preventDefault()
            const { elements } = container
            // console.log(elements)
            const contact = {}

            Array.from(elements).filter(element => element.name).forEach(element => {
                const { name, value } = element
                contact[name] = value
                // console.log(elements)

                element.value = ""
            })
            
            super.add(contact);

            const contactlist = document.querySelector('.list')

            const contactsHtml = `<div class="contact" id="${contact.id}">
        <div class="contact__content">
            <div class="content  name">${contact.name}</div>
            <div class="content  email">${contact.email}</div>
            <div class="content  address">${contact.address}</div>
            <div class="content  phone">${contact.phone}</div>
            </div>
            <div class="contact__button">
            <button class="button__edit" data-action="edit">edit</button>
            <button class="button__delete" data-action="delete">delete</button>
        </div>
    </div>`

            contactlist.insertAdjacentHTML('beforeend', contactsHtml)

        })


    }




    onRemove() {
        super.remove(contact)


        const remove = document.querySelector('.list')
        remove.addEventListener('click', function (event) {

            if (event.target.dataset.action === "delete") {
                console.log(event.target)

                const node = event.target.closest('.contact')

                node.remove()
            }
        })

    }



    onEdit() {
        super.edit();

        const edit = document.querySelector('.list')
        edit.addEventListener('click', function (event) {
            // console.log(event.target.textContent)
            if (event.target.dataset.action === "edit") {
                const node = event.target.closest('.contact')
                const id = node.id

                const name = node.firstElementChild.firstElementChild
                console.log(name)
                
                name.innerHTML = prompt("Сhange the name", name.textContent)
                

                const email = name.nextElementSibling
                console.log(email)
                email.innerHTML = prompt("Change email", email.textContent)

                const address = email.nextElementSibling
                console.log(address)
                address.innerHTML = prompt("Change address", address.textContent)

                const phone = address.nextElementSibling
                console.log(phone)
                phone.innerHTML = prompt("Change phone", phone.textContent)

            }
        })
    }


}


const contactsApp = new ContactsApp()

console.log(contactsApp)



