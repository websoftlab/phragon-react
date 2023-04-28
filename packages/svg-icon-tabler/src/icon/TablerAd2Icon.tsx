import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAd2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAd2Icon = React.forwardRef<SVGSVGElement, TablerAd2IconProps>(function TablerAd2Icon(props, ref) {
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
			<path d="M11.933 5h-6.933v16h13v-8" />
			<path d="M14 17h-5" />
			<path d="M9 13h5v-4h-5z" />
			<path d="M15 5v-2" />
			<path d="M18 6l2 -2" />
			<path d="M19 9h2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAd2Icon.displayName = "TablerAd2Icon";
}
