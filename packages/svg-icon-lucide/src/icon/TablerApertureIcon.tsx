import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerApertureIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerApertureIcon = React.forwardRef<SVGSVGElement, TablerApertureIconProps>(function TablerApertureIcon(
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
			<path d="M22 12 A10 10 0 0 1 12 22 A10 10 0 0 1 2 12 A10 10 0 0 1 22 12" />
			<path d="M14.31 8 L20.05 17.94" />
			<path d="M9.69 8 L21.17 8" />
			<path d="M7.38 12 L13.12 2.06" />
			<path d="M9.69 16 L3.95 6.06" />
			<path d="M14.31 16 L2.83 16" />
			<path d="M16.62 12 L10.88 21.94" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerApertureIcon.displayName = "TablerApertureIcon";
}
