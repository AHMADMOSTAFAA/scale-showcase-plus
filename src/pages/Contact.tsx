import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [state, handleSubmit] = useForm("xwpnnrvj"); // Formspree ID
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <Navbar />
      <div className="container py-8 md:py-16">
        {/* Header */}
        <div className="text-center mb-12 ">
          <h1 className="text-4xl py-16 md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary  bg-clip-text text-transparent mb-4">
            {t("contact.title")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        {/* About ICTCO Section */}
        <Card className="p-8 mb-12 border-primary/20 bg-white/50 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-primary mb-6">
            {t("contact.aboutTitle")}
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <p className="text-muted-foreground mb-4">
                <strong>{t("contact.about.company")}</strong>{" "}
                {t("contact.about.description1")}
              </p>
              <p className="text-muted-foreground mb-4">
                {t("contact.about.description2")}
              </p>
              <p className="text-muted-foreground">
                {t("contact.about.description3")}
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                <span className="text-muted-foreground">
                  {t("contact.about.employees")}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-primary" />
                <span className="text-muted-foreground">
                  {t("contact.about.iso")}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-primary" />
                <span className="text-muted-foreground">
                  {t("contact.about.branches")}
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Contact Information & Form */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <Card className="p-8 border-primary/20 bg-white/50 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-primary mb-6">
              {t("contact.info.title")}
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {t("contact.info.cairo.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("contact.info.cairo.details")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {t("contact.info.alex.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("contact.info.alex.details")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {t("contact.info.phone.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("contact.info.phone.details")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {t("contact.info.email.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("contact.info.email.details")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Clock className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {t("contact.info.hours.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("contact.info.hours.details")}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Contact Form */}
          <Card className="p-8 border-primary/20 bg-white/50 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-primary mb-6">
              {t("contact.form.title")}
            </h2>

            {state.succeeded ? (
              <div className="text-center">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  ✅ {t("contact.form.successTitle")}
                </h3>
                <p className="text-muted-foreground">
                  {t("contact.form.successMessage")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      {t("contact.form.firstName")}
                    </label>
                    <Input
                      name="firstName"
                      placeholder={t("contact.form.firstNamePlaceholder")}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      {t("contact.form.lastName")}
                    </label>
                    <Input
                      name="lastName"
                      placeholder={t("contact.form.lastNamePlaceholder")}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {t("contact.form.email")}
                  </label>
                  <Input
                    type="email"
                    name="email"
                    placeholder={t("contact.form.emailPlaceholder")}
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {t("contact.form.phone")}
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder={t("contact.form.phonePlaceholder")}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {t("contact.form.company")}
                  </label>
                  <Input
                    name="company"
                    placeholder={t("contact.form.companyPlaceholder")}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {t("contact.form.subject")}
                  </label>
                  <Input
                    name="subject"
                    placeholder={t("contact.form.subjectPlaceholder")}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {t("contact.form.message")}
                  </label>
                  <Textarea
                    name="message"
                    placeholder={t("contact.form.messagePlaceholder")}
                    className="min-h-[120px]"
                    required
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {state.submitting
                    ? t("contact.form.sending")
                    : t("contact.form.send")}
                </Button>
              </form>
            )}
          </Card>
        </div>

        {/* Quality & Certifications */}
        <Card className="p-8 mb-12 border-primary/20 bg-white/50 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t("contact.quality.title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-3">
                {t("contact.quality.standardsTitle")}
              </h3>
              <p className="text-muted-foreground mb-4">
                {t("contact.quality.standardsText1")}{" "}
                <strong>ISO 9001/2000</strong>{" "}
                {t("contact.quality.standardsText2")}
              </p>
              <p className="text-muted-foreground">
                {t("contact.quality.training")}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">
                {t("contact.quality.expertiseTitle")}
              </h3>
              <ul className="text-muted-foreground space-y-2">
                <li>{t("contact.quality.expertise1")}</li>
                <li>{t("contact.quality.expertise2")}</li>
                <li>{t("contact.quality.expertise3")}</li>
                <li>{t("contact.quality.expertise4")}</li>
                <li>{t("contact.quality.expertise5")}</li>
                <li>{t("contact.quality.expertise6")}</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Our Partners */}
        <Card className="p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 text-center border-primary/20">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t("contact.partners.title")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <div className="font-semibold text-foreground">Flintec</div>
              <div className="text-sm text-muted-foreground">Germany</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-foreground">
                Mettler Toledo
              </div>
              <div className="text-sm text-muted-foreground">Switzerland</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-foreground">Baykon</div>
              <div className="text-sm text-muted-foreground">Turkey</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-foreground">Cardinal</div>
              <div className="text-sm text-muted-foreground">USA</div>
            </div>
          </div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            {t("contact.partners.description")}
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
