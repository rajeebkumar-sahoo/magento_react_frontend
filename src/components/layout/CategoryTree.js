import React, { Fragment } from 'react'




export default function CategoryTree(props) {

    function renderChildrenIfAny(category) {
        if(category.children_count > 0) {
            return <ul><CategoryTree categories={category.children} /></ul>
        }
    }

    function getNavItemClasses(category) {
        let className = 'nav-item'
        if (category.children_count > 0) {
            return className+= ' dropdown'
        }
        return className
    }

    function getNavItemLinkClasses(category) {
        let className = 'nav-link text-white'
        if (category.children_count > 0) {
            return className+= ' dropdown-toggle'
        }
        return className
    }

    const navItemClasses = 'nav-item'
    const navItemDropdownClasses = 'nav-item dropdown'

    const navLinkClasses = 'nav-link text-white'
    const navLinkDropdownClasses = 'nav-link text-white dropdown-toggle'


    function getDropDownItemAttributes(category) {
        console.log(category)
        if (category.children_count) {
            return 'role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"'
        } else {
            return null
        }
    }

    return (
        <Fragment>
            {
                props.categories.map(category => (
                    <li key={category.id} 
                        className = {category.children_count ? navItemDropdownClasses : navItemClasses}>
                        <a href="#" 
                            className={category.children_count ? navLinkDropdownClasses : navLinkClasses}
                            id={category.children_count ? `navbarDropdown_${category.id}` : `item_${category.id}`} 
                            role={category.children_count ? "button" : ""}
                            data-toggle={category.children_count ? "dropdown" : ""}
                            aria-haspopup={category.children_count ? "true" : "false"}
                            aria-expanded={category.children_count ? "false" : "false"}
                        >
                            {category.name}
                        </a>
                        
                        {renderChildrenIfAny(category)}
                    </li>
                ))
            }
        </Fragment>
    )
}


{/* <li class="nav-item dropdown">
    <a class="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button"
        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img src="{{ user.profile.avatar.url }}" alt="profile" style="height: 45px;" class="responsive rounded-circle"> {{user.username}} ---
    </a>
    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="{% url 'password_change' %}">Change Password</a>
        <a class="dropdown-item" href="{% url 'logout' %}">Logout</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Something else here</a>
    </div>
</li> */}
