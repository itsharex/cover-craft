import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload } from 'lucide-react';
import { useGeneratorStore } from '@/store/generator';
import { handleImageUpload } from '@/utils/generator';

export function BackgroundConfig() {
  const {
    backgroundType,
    setBackgroundType,
    backgroundColor,
    setBackgroundColor,
    gradientStart,
    setGradientStart,
    gradientEnd,
    setGradientEnd,
    gradientAngle,
    setGradientAngle,
    backgroundImage,
    setBackgroundImage,
    backgroundSize,
    setBackgroundSize,
    borderRadius,
    setBorderRadius
  } = useGeneratorStore();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-medium">背景设置</h3>
      </div>
      <div className="space-y-4">
        <Tabs value={backgroundType} onValueChange={setBackgroundType}>
          <div className="space-y-2">
            <Label className="text-muted-foreground">模式</Label>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="solid">纯色</TabsTrigger>
              <TabsTrigger value="gradient">渐变</TabsTrigger>
              <TabsTrigger value="image">图片</TabsTrigger>
              <TabsTrigger value="transparent">透明</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="solid" className="space-y-2">
            <div className="space-y-2">
              <Label className="text-muted-foreground">背景颜色</Label>
              <div className="flex space-x-2">
                <Input value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)} />
                <div className="relative w-10">
                  <input
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
                  />
                  <div className="w-full h-full rounded-md border" style={{ backgroundColor }} />
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="gradient" className="space-y-4">
            <div className="space-y-2">
              <Label className="text-muted-foreground">起始颜色</Label>
              <div className="flex space-x-2">
                <Input value={gradientStart} onChange={(e) => setGradientStart(e.target.value)} />
                <div className="relative w-10">
                  <input
                    type="color"
                    value={gradientStart}
                    onChange={(e) => setGradientStart(e.target.value)}
                    className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
                  />
                  <div className="w-full h-full rounded-md border" style={{ backgroundColor: gradientStart }} />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-muted-foreground">结束颜色</Label>
              <div className="flex space-x-2">
                <Input value={gradientEnd} onChange={(e) => setGradientEnd(e.target.value)} />
                <div className="relative w-10">
                  <input
                    type="color"
                    value={gradientEnd}
                    onChange={(e) => setGradientEnd(e.target.value)}
                    className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
                  />
                  <div className="w-full h-full rounded-md border" style={{ backgroundColor: gradientEnd }} />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-muted-foreground">渐变角度</Label>
              <div className="flex items-center space-x-2">
                <Slider
                  value={[gradientAngle]}
                  onValueChange={([value]) => setGradientAngle(value)}
                  min={0}
                  max={360}
                  step={1}
                  className="flex-1"
                />
                <span className="w-12 text-sm text-muted-foreground text-right">{gradientAngle}°</span>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="image" className="space-y-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <Label className="text-muted-foreground">本地上传</Label>
                  <div className="mt-2">
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">点击上传图片</p>
                        </div>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={(e) => handleImageUpload(e, setBackgroundImage)}
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <Label className="text-muted-foreground">图片链接</Label>
                  <div className="mt-2">
                    <Input
                      placeholder="输入图片链接"
                      value={backgroundImage}
                      onChange={(e) => setBackgroundImage(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-muted-foreground">图片填充方式</Label>
                <Select value={backgroundSize} onValueChange={(value: 'cover' | 'contain') => setBackgroundSize(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="选择填充方式" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cover">填充</SelectItem>
                    <SelectItem value="contain">适应</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        <div className="space-y-2">
          <Label className="text-muted-foreground">背景圆角大小</Label>
          <div className="flex items-center space-x-2">
            <Slider
              value={[borderRadius]}
              onValueChange={([value]) => setBorderRadius(value)}
              min={0}
              max={100}
              step={1}
              className="flex-1"
            />
            <span className="w-12 text-sm text-muted-foreground text-right">{borderRadius}px</span>
          </div>
        </div>
      </div>
    </div>
  );
}