"use client";

import { useMemo, useState } from "react";

const personalRequests = [
  "Become a Taste Hunter",
  "Apply as a Judge",
  "Attend a curated tasting",
  "Join community events",
];

const businessRequests = [
  "Request consultancy",
  "Technical mentorship",
  "Menu or product development",
  "Partnership & sponsorship",
];

type EntityType = "business" | "personal" | "";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    entityType: "" as EntityType,
    request: "",
    message: "",
  });

  const requestOptions = useMemo(
    () => (formData.entityType === "business" ? businessRequests : personalRequests),
    [formData.entityType],
  );

  const isComplete =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.phone.trim() &&
    formData.entityType !== "" &&
    formData.request.trim() &&
    formData.message.trim();

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleEntityType = (type: EntityType) => {
    setFormData((prev) => ({
      ...prev,
      entityType: type,
      request: "",
    }));
  };

  return (
    <section className="rounded-3xl border border-(--border) bg-white p-8 shadow-xl">
      <div className="flex flex-col gap-2 pb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
          Tell us more
        </p>
        <h2 className="text-3xl font-bold text-[var(--primary)]">Share your request</h2>
        <p className="text-[var(--muted)]">
          Select whether this is a business or personal note to reveal tailored
          request options. Required fields keep the Send notification button
          active.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <div className="space-y-4">
          <LabelledInput
            label="Name"
            required
            value={formData.name}
            onChange={(value) => handleChange("name", value)}
            placeholder="Your full name"
          />
          <LabelledInput
            label="Email"
            type="email"
            required
            value={formData.email}
            onChange={(value) => handleChange("email", value)}
            placeholder="you@example.com"
          />
          <LabelledInput
            label="Phone number"
            type="tel"
            required
            value={formData.phone}
            onChange={(value) => handleChange("phone", value)}
            placeholder="Include country code"
          />
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-[var(--primary-dark)]">
              Entity type <span className="text-[var(--tertiary)]">*</span>
            </p>
            <div className="grid grid-cols-2 gap-3">
              <EntityCard
                title="Business"
                description="Consultancy, technical support, collaborations"
                active={formData.entityType === "business"}
                onClick={() => handleEntityType("business")}
              />
              <EntityCard
                title="Personal"
                description="Taste Hunter, judging, or community requests"
                active={formData.entityType === "personal"}
                onClick={() => handleEntityType("personal")}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--primary-dark)]">
              Specify your request <span className="text-[var(--tertiary)]">*</span>
            </label>
            <div className="rounded-2xl border border-(--border) bg-(--secondary-light) p-3">
              <select
                value={formData.request}
                onChange={(event) => handleChange("request", event.target.value)}
                className="w-full rounded-xl border border-(--border-light) bg-white px-4 py-3 text-[var(--primary)] focus:border-(--accent) focus:outline-none"
                disabled={!formData.entityType}
              >
                <option value="" disabled>
                  {formData.entityType
                    ? "Choose the request that fits best"
                    : "Select an entity type first"}
                </option>
                {requestOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <p className="mt-2 text-xs text-[var(--muted)]">
                {formData.entityType === "business"
                  ? "Business selections include consultancy and technical pathways."
                  : "Personal selections highlight Taste Hunter or judging journeys."}
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--primary-dark)]">
              Message <span className="text-[var(--tertiary)]">*</span>
            </label>
            <textarea
              value={formData.message}
              onChange={(event) => handleChange("message", event.target.value)}
              rows={5}
              className="w-full rounded-2xl border border-(--border) bg-(--secondary-light) px-4 py-3 text-[var(--primary)] focus:border-(--accent) focus:outline-none"
              placeholder="Share timelines, goals, and any links we should review."
            />
          </div>

          <div className="flex items-center justify-between gap-4 rounded-2xl border border-(--border-light) bg-(--secondary-light) p-4">
            <div>
              <p className="text-sm font-semibold text-[var(--primary-dark)]">Send notification</p>
              <p className="text-xs text-[var(--muted)]">
                Enabled when all required fields are complete.
              </p>
            </div>
            <button
              type="button"
              className={`rounded-full px-5 py-2 text-sm font-semibold text-white transition ${
                isComplete
                  ? "bg-[var(--primary)] shadow-lg hover:-translate-y-[2px] hover:bg-[var(--primary-dark)]"
                  : "cursor-not-allowed bg-[var(--muted)] opacity-60"
              }`}
              disabled={!isComplete}
            >
              Send notification
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const EntityCard = ({
  title,
  description,
  active,
  onClick,
}: {
  title: "Business" | "Personal";
  description: string;
  active: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-left transition ${
        active
          ? "border-[var(--accent-strong)] bg-[var(--secondary)] shadow-lg"
          : "border-(--border) bg-(--secondary-light) hover:border-[var(--accent)]"
      } rounded-2xl border p-4`}
    >
      <p className="text-sm font-semibold text-[var(--primary-dark)]">{title}</p>
      <p className="text-xs text-[var(--muted)]">{description}</p>
    </button>
  );
};

const LabelledInput = ({
  label,
  type = "text",
  required,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-[var(--primary-dark)]">
        {label} {required && <span className="text-[var(--tertiary)]">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-(--border) bg-(--secondary-light) px-4 py-3 text-[var(--primary)] focus:border-(--accent) focus:outline-none"
      />
    </div>
  );
};
