import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { applicationsService } from "@/services/api";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Отправляем только имя и телефон, как требуется в API
      const applicationData = {
        name: formData.name,
        phone_number: formData.phone_number,
      };

      await applicationsService.createApplication(applicationData);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        phone_number: "",
        email: "",
        message: "",
      });

      // Сбрасываем сообщение об успехе через 5 секунд
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(
        "Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-lg font-medium mb-4">
        Оставьте свои контактные данные, и мы свяжемся с вами в ближайшее время
      </h3>

      {submitSuccess && (
        <div className="bg-green-50 text-green-700 p-4 rounded-md mb-4">
          Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
        </div>
      )}

      {submitError && (
        <div className="bg-red-50 text-red-700 p-4 rounded-md mb-4">
          {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Ваше имя
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Иван Иванов"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Телефон
          </label>
          <Input
            id="phone"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            required
            placeholder="+7 (999) 999-99-99"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@mail.ru"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Сообщение
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Ваше сообщение..."
            rows={4}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Отправка..." : "Отправить"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
