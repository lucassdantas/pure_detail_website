'use client'
import { useState } from "react";
import { ContactDetailsForm } from "@/app/book/ContactDetailsForm";
import { Banner } from "@/app/components/Banner";
import { HighLightedText } from "@/app/components/HighLightedText";
import { HighLightedTitle } from "@/app/components/HighLightedTitle";
import { Section } from "@/app/components/Section";
import { VehicleInfoForm } from "@/app/book/VeichleInfoForm";
import { siteUrl } from "@/app/utils/constantVales/urls";

export default function BookPage() {
  // Contato
  const [name, setName] = useState("");
  const [suburb, setSuburb] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [preferedContactMethod, setPreferedContactMethod] = useState("");

  // Veículo
  const [vehicleInfo, setVehicleInfo] = useState<Record<string, any>>({});

  // Estado de envio
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateVehicleInfo = () => {
    for (const fieldKey in vehicleInfo) {
      if (vehicleInfo[fieldKey] && typeof vehicleInfo[fieldKey] === "object") {
        for (const nestedKey in vehicleInfo[fieldKey]) {
          if (!vehicleInfo[fieldKey][nestedKey]) {
            alert(`Please fill in "${nestedKey}" in ${fieldKey}`);
            return false;
          }
        }
      }
    }
    return true;
  };

  // Envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // 🔹 evita reload da página
    if (!validateVehicleInfo()) return;

    const formData = new FormData();

    // Dados de contato
    formData.append("name", name);
    formData.append("suburb", suburb);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("preferedContactMethod", preferedContactMethod);

    // Dados do veículo
    for (const key in vehicleInfo) {
      if (key === "photos" && Array.isArray(vehicleInfo.photos)) {
        vehicleInfo.photos.forEach((file: File, index: number) => {
          formData.append(`photos[${index}]`, file);
        });
      } else {
        formData.append(key, JSON.stringify(vehicleInfo[key]));
      }
    }

    try {
      const response = await fetch(location.protocol + '//' + siteUrl + "/backend/send-email.php", {
        method: "POST",
        body: formData,
      });
      console.log(response);
      if (response.ok) {
        setIsSubmitted(true); // ✅ marca como enviado
      } else {
        alert("Error on send your quote. Try again later or contact us by email/phone.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Error on send your quote. Try again later or contact us by email/phone.");
    }
  };

  return (
    <>
      <Banner title="Get a Quote Today" bgImgClass="bookBanner" hasButton={false} />

      <Section className="pb-4">
        {isSubmitted ? (
          <div className="w-full flex justify-center my-24">
            <HighLightedText className="lg:w-[600px] w-full text-center text-lg">
              Thanks for submitting your request! We'll be in touch within 24 hours with your tailored quote and next steps.
            </HighLightedText>
          </div>
        ) : (
          // ✅ Coloquei dentro de um <form>
          <form onSubmit={handleSubmit}>
            <HighLightedTitle text="Contact Details" />
            <ContactDetailsForm
              name={name}
              setName={setName}
              suburb={suburb}
              setSuburb={setSuburb}
              phone={phone}
              setPhone={setPhone}
              email={email}
              setEmail={setEmail}
              preferedContactMethod={preferedContactMethod}
              setPreferedContactMethod={setPreferedContactMethod}
            />

            <HighLightedTitle text="Vehicle Info" />
            <VehicleInfoForm onChange={setVehicleInfo} />

            <div className="w-full flex justify-center my-6">
              <button
                type="submit" // 🔹 agora dispara o required
                className="py-2 px-2 text-center outline-2 outline-white rounded-full cursor-pointer text-2xl font-medium hover:outline-accent-yellow lg:min-w-[240px] transition-colors"
              >
                Submit Quote
              </button>
            </div>
          </form>
        )}
      </Section>
    </>
  );
}
