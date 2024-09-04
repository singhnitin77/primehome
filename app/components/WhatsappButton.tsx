import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsappButton() {
    return (
        <a
            href="https://wa.me/+919654066611"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 animate-spin hover:animate-none"
            aria-label="Contact us on WhatsApp"
        >
            <FaWhatsapp className="w-6 h-6" />
        </a>
    );
}
