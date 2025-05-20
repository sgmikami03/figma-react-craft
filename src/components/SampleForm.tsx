
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, FormValues } from '@/schemas/formSchema';
import { Input } from '@/components/custom/Input';
import { Button } from '@/components/custom/Button';
import { RadioButton } from '@/components/custom/RadioButton';
import { Checkbox } from '@/components/custom/Checkbox';
import { Dropdown } from '@/components/custom/Dropdown';
import { prefectures } from '@/data/prefectures';
import { User, MapPin, Radio, CheckSquare, Send } from 'lucide-react';

export function SampleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gender: undefined,
      prefecture: "",
      agreeToTerms: false,
    }
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormValues | null>(null);
  
  const watchGender = watch('gender');
  const watchAgreeToTerms = watch('agreeToTerms');

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
    setFormData(data);
    setFormSubmitted(true);
  };

  const handlePrefectureChange = (value: string) => {
    setValue('prefecture', value, { shouldValidate: true });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg">
      <h1 className="text-2xl font-bold mb-6">サンプルフォーム</h1>

      {formSubmitted ? (
        <div className="space-y-4">
          <div className="p-4 bg-purple-50 rounded-md border border-purple-200">
            <h2 className="text-lg font-medium text-purple-800 mb-2">送信完了</h2>
            <p className="text-gray-600">以下の内容で送信されました：</p>
            <ul className="mt-2 space-y-1 text-sm">
              <li><span className="font-medium">お名前：</span> {formData?.name}</li>
              <li><span className="font-medium">住所：</span> {formData?.address}</li>
              <li><span className="font-medium">都道府県：</span> {prefectures.find(p => p.value === formData?.prefecture)?.label}</li>
              <li>
                <span className="font-medium">性別：</span> 
                {formData?.gender === 'male' ? '男性' : formData?.gender === 'female' ? '女性' : '回答しない'}
              </li>
              <li><span className="font-medium">利用規約：</span> 同意済み</li>
            </ul>
          </div>
          <Button onClick={() => setFormSubmitted(false)} variant="secondary" className="w-full">
            フォームに戻る
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5">
              <User className="h-5 w-5 text-gray-500" />
              <label htmlFor="name" className="text-sm font-medium">
                お名前
              </label>
            </div>
            <Input
              id="name"
              placeholder="例：山田 太郎"
              error={errors.name?.message}
              {...register('name')}
            />
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-5 w-5 text-gray-500" />
              <label htmlFor="address" className="text-sm font-medium">
                住所
              </label>
            </div>
            <Input
              id="address"
              placeholder="例：東京都新宿区西新宿2-8-1"
              error={errors.address?.message}
              {...register('address')}
            />
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-5 w-5 text-gray-500" />
              <label htmlFor="prefecture" className="text-sm font-medium">
                都道府県
              </label>
            </div>
            <Dropdown
              options={prefectures}
              value={watch('prefecture')}
              onChange={handlePrefectureChange}
              className={errors.prefecture ? 'border-error' : ''}
            />
            {errors.prefecture && (
              <p className="mt-1 text-sm text-error">{errors.prefecture.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-1.5">
              <Radio className="h-5 w-5 text-gray-500" />
              <span className="text-sm font-medium">性別</span>
            </div>
            <div className="space-y-2">
              <RadioButton
                label="男性"
                value="male"
                checked={watchGender === 'male'}
                onChange={() => setValue('gender', 'male', { shouldValidate: true })}
              />
              <RadioButton
                label="女性"
                value="female"
                checked={watchGender === 'female'}
                onChange={() => setValue('gender', 'female', { shouldValidate: true })}
              />
              <RadioButton
                label="回答しない"
                value="no_answer"
                checked={watchGender === 'no_answer'}
                onChange={() => setValue('gender', 'no_answer', { shouldValidate: true })}
              />
            </div>
            {errors.gender && (
              <p className="mt-1 text-sm text-error">{errors.gender.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-1.5">
              <CheckSquare className="h-5 w-5 text-gray-500" />
              <span className="text-sm font-medium">利用規約について</span>
            </div>
            <div onClick={() => setValue('agreeToTerms', !watchAgreeToTerms, { shouldValidate: true })}>
              <Checkbox
                id="agreeToTerms"
                aria-label="利用規約に同意しますか？"
                checked={watchAgreeToTerms}
                onChange={() => {}}
              />
            </div>
            {errors.agreeToTerms && (
              <p className="mt-1 text-sm text-error">{errors.agreeToTerms.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full flex justify-center items-center gap-2">
            <Send className="h-5 w-5" />
            送信する
          </Button>
        </form>
      )}
    </div>
  );
}
