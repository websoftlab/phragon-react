import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFlower2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFlower2Icon = React.forwardRef<SVGSVGElement, TablerFlower2IconProps>(function TablerFlower2Icon(
	props,
	ref
) {
	const { children, ...rest } = props;
	return (
		<SvgIcon
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			{...rest}
			ref={ref}
			size={24}
			icon={undefined}
			fill="none"
		>
			<path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1" />
			<path d="M14 8 A2 2 0 0 1 12 10 A2 2 0 0 1 10 8 A2 2 0 0 1 14 8" />
			<path d="M12 10v12" />
			<path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z" />
			<path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFlower2Icon.displayName = "TablerFlower2Icon";
}
