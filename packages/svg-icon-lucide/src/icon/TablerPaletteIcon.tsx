import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPaletteIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPaletteIcon = React.forwardRef<SVGSVGElement, TablerPaletteIconProps>(function TablerPaletteIcon(
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
			<path d="M14 6.5 A0.5 0.5 0 0 1 13.5 7 A0.5 0.5 0 0 1 13 6.5 A0.5 0.5 0 0 1 14 6.5" />
			<path d="M18 10.5 A0.5 0.5 0 0 1 17.5 11 A0.5 0.5 0 0 1 17 10.5 A0.5 0.5 0 0 1 18 10.5" />
			<path d="M9 7.5 A0.5 0.5 0 0 1 8.5 8 A0.5 0.5 0 0 1 8 7.5 A0.5 0.5 0 0 1 9 7.5" />
			<path d="M7 12.5 A0.5 0.5 0 0 1 6.5 13 A0.5 0.5 0 0 1 6 12.5 A0.5 0.5 0 0 1 7 12.5" />
			<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPaletteIcon.displayName = "TablerPaletteIcon";
}
