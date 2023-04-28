import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDna2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDna2Icon = React.forwardRef<SVGSVGElement, TablerDna2IconProps>(function TablerDna2Icon(props, ref) {
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
			<path d="M17 3v1c-.01 3.352 -1.68 6.023 -5.008 8.014c-3.328 1.99 3.336 -2 .008 -.014c-3.328 1.99 -5 4.662 -5.008 8.014v1" />
			<path d="M17 21.014v-1c-.01 -3.352 -1.68 -6.023 -5.008 -8.014c-3.328 -1.99 3.336 2 .008 .014c-3.328 -1.991 -5 -4.662 -5.008 -8.014v-1" />
			<path d="M7 4h10" />
			<path d="M7 20h10" />
			<path d="M8 8h8" />
			<path d="M8 16h8" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDna2Icon.displayName = "TablerDna2Icon";
}
