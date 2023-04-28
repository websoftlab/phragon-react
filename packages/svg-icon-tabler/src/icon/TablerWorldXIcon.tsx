import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWorldXIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWorldXIcon = React.forwardRef<SVGSVGElement, TablerWorldXIconProps>(function TablerWorldXIcon(
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
			<path d="M20.929 13.131a9 9 0 1 0 -8.931 7.869" />
			<path d="M3.6 9h16.8" />
			<path d="M3.6 15h9.9" />
			<path d="M11.5 3a17 17 0 0 0 0 18" />
			<path d="M12.5 3a16.992 16.992 0 0 1 2.505 10.573" />
			<path d="M22 22l-5 -5" />
			<path d="M17 22l5 -5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWorldXIcon.displayName = "TablerWorldXIcon";
}
