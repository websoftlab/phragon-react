import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerZapOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerZapOffIcon = React.forwardRef<SVGSVGElement, TablerZapOffIconProps>(function TablerZapOffIcon(
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
			<path d="M12.41 6.75 L13 2 L10.57 4.92" />
			<path d="M18.57 12.91 L21 10 L15.66 10" />
			<path d="M8 8 L3 14 L12 14 L11 22 L16 16" />
			<path d="M2 2 L22 22" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerZapOffIcon.displayName = "TablerZapOffIcon";
}
