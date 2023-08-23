//helper.js
//used to make first letter capital letter
export function capitalizeFirstLetter(str) {
        if(str)
            return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        return "";
}
//returns date format of a timeStamp
export function getDate(timestamp) {
        const date = new Date(Number(timestamp));
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');

        const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

        return formattedDate;

}

