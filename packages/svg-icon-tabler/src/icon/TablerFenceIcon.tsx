import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFenceIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFenceIcon = React.forwardRef<SVGSVGElement, TablerFenceIconProps>(function TablerFenceIcon(
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
			<path d="M4 12v4h16v-4z" />
			<path d="M6 16v4h4v-4m0 -4v-6l-2 -2l-2 2v6" />
			<path d="M14 16v4h4v-4m0 -4v-6l-2 -2l-2 2v6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFenceIcon.displayName = "TablerFenceIcon";
}
