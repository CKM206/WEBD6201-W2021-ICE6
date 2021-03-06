"use strict";

(function (core) {
    class Router {
        // Constructors
        constructor() 
        {
            this.ActiveLink = "";
        }

        // Public Properties
        get ActiveLink() 
        {
            return this.m_activeLink;
        }

        set ActiveLink(link) 
        {
            this.m_activeLink = link;
        }

        // Private Methods

        // Publics Methods
        /**
         * Add(string) - Adds a new Route to the routing table
         * @param {string} route 
         * @returns {void} 
         */
        Add(route) 
        {
            this.m_routingTable.push(route);
        }

        /**
         * AddTable(String[]) - Replaces the routing table with a new
         *                    one. Routes should being with a / char.
         * @param {string[]} routingTable 
         * @returns {void}
         */
        AddTable(routingTable) 
        {
            this.m_routingTable = routingTable;
        }

        /**
         * Find(string) - This method finds the index of a particular
         *              route that is in the table. Otherwise returns
         *              -1.
         * @param {string} route 
         * @returns {number}
         */
        Find(route) 
        {
            return this.m_routingTable.indexOf(route);
        }

        Remove(route) 
        {
            if (this.Find(route) > -1) 
            {
                this.m_routingTable = this.m_routingTable.splice(this.Find(route), 1);
                return true;
            }
            return false;
        }

        ToString() 
        {
            return this.m_routingTable.toString();
        }

    }
    core.Router = Router;
})(core || (core = {}));

let router = new core.Router();

router.AddTable(["/", "/home", "/about", "/services", "contact",
                 "/contact-list", "/projects", "/register", "/login", "/edit"]);
