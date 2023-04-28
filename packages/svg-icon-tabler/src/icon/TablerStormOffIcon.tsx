import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerStormOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerStormOffIcon = React.forwardRef<SVGSVGElement, TablerStormOffIconProps>(function TablerStormOffIcon(
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
			<path d="M9.884 9.874a3 3 0 1 0 4.24 4.246m.57 -3.441a3.012 3.012 0 0 0 -1.41 -1.39" />
			<path d="M7.037 7.063a7 7 0 0 0 9.907 9.892m1.585 -2.426a7 7 0 0 0 -9.058 -9.059" />
			<path d="M5.369 14.236c-1.605 -3.428 -1.597 -6.673 -1 -9.849" />
			<path d="M18.63 9.76a14.323 14.323 0 0 1 1.368 6.251m-.37 3.608c-.087 .46 -.187 .92 -.295 1.377" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerStormOffIcon.displayName = "TablerStormOffIcon";
}
