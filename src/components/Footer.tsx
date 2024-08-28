'use client'
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="mt-10 bg-secondaryColor">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-4 text-white">
          <div className="col-span-1">
            <h5 className="font-bold mb-4">Kategori</h5>
            <h6 className="my-4 hover:underline hover:cursor-pointer">
              Desain Grafis
            </h6>
            <h6 className="my-4 hover:underline hover:cursor-pointer">
              Pemrograman & Teknologi
            </h6>
            <h6 className="my-4 hover:underline hover:cursor-pointer">
              Teknik & Arsitektur
            </h6>
            <h6 className="my-4 hover:underline hover:cursor-pointer">
              Penulisan dan Translasi
            </h6>
            <h6 className="my-4 hover:underline hover:cursor-pointer">
              Pemasaran Digital
            </h6>
            <h6 className="my-4 hover:underline hover:cursor-pointer">
              Animasi Video
            </h6>
            <h6 className="my-4 hover:underline hover:cursor-pointer">
              Musik & Video
            </h6>
            <h6 className="my-4 hover:underline hover:cursor-pointer">
              Bisnis
            </h6>
            <h6 className="my-4 hover:underline hover:cursor-pointer">Data</h6>
            <h6 className="my-4 hover:underline hover:cursor-pointer">
              Gaya Hidup
            </h6>
            <h6 className="my-4 hover:underline hover:cursor-pointer">
              Lainnya
            </h6>
          </div>
          <div className="col-span-1">
            <h5 className="font-bold mb-4">About</h5>
            <h6 className="my-4 hover:underline hover:cursor-pointer">
              Daftar Sebagai Freelancer
            </h6>
            <h6 className="my-4 hover:underline hover:cursor-pointer">
              Cara Mulai Pekerjaan
            </h6>
            <h6 className="my-4 hover:underline hover:cursor-pointer">
              Pembayaran
            </h6>
            <h6 className="my-4 hover:underline hover:cursor-pointer">
              Jaminan Pekerjaan
            </h6>
            <h6 className="my-4 hover:underline hover:cursor-pointer">
              Blog Informasi
            </h6>
            <h6 className="my-4 hover:underline hover:cursor-pointer">FAQ</h6>
            <h6 className="my-4 hover:underline hover:cursor-pointer">
              Aturan Penggunaan Personal
            </h6>
          </div>
          <div className="col-span-1">
            <h5 className="font-bold mb-4">Tentang Onanmedia</h5>
            <h6 className="my-4 hover:underline hover:cursor-pointer">
              Bekerja dengan Onanmedia
            </h6>
            <h6 className="my-4 hover:underline hover:cursor-pointer">
              Syarat & Ketentuan
            </h6>
            <h6 className="my-4 hover:underline hover:cursor-pointer">
              Kebijakan Privasi
            </h6>
          </div>
          <div className="col-span-1">
            <h5 className="font-bold mb-4">Hubungi Kami</h5>
            <h6 className="my-4 hover:underline hover:cursor-pointer">
              cs@onanmedia.com
            </h6>
            <h6 className="my-4 hover:underline hover:cursor-pointer">
              Whatsapp
            </h6>
          </div>
        </div>
        <div className="border-t border-white py-5 flex justify-between">
          <h6 className="text-white text-sm">© Onanmedia 2022</h6>
          <div className="flex">
            <a href="#">
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-white mx-2"
                size="xl"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-white mx-2"
                size="xl"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-white mx-2"
                size="xl"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faPinterest}
                className="text-white mx-2"
                size="xl"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white mx-2"
                size="xl"
              />
            </a>
            <div className="text-white mx-2 hover:cursor-pointer">
              <FontAwesomeIcon icon={faGlobe} className="mx-1" />
              <span className="mx-1">ID</span>
            </div>
            <div className="text-white ml-2 hover:cursor-pointer">
              <FontAwesomeIcon icon={faMoneyBill} className="mx-1" />
              <span className="mx-1">IDR</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
