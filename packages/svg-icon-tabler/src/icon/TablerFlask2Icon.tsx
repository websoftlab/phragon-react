import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFlask2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFlask2Icon = React.forwardRef<SVGSVGElement, TablerFlask2IconProps>(function TablerFlask2Icon(
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
			<path d="M6.1 15h11.8" />
			<path d="M14 3v7.342a6 6 0 0 1 1.318 10.658h-6.635a6 6 0 0 1 1.317 -10.66v-7.34h4z" />
			<path d="M9 3h6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFlask2Icon.displayName = "TablerFlask2Icon";
}
