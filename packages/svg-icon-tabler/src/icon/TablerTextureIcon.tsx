import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTextureIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTextureIcon = React.forwardRef<SVGSVGElement, TablerTextureIconProps>(function TablerTextureIcon(
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
			<path d="M6 3l-3 3" />
			<path d="M21 18l-3 3" />
			<path d="M11 3l-8 8" />
			<path d="M16 3l-13 13" />
			<path d="M21 3l-18 18" />
			<path d="M21 8l-13 13" />
			<path d="M21 13l-8 8" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTextureIcon.displayName = "TablerTextureIcon";
}
