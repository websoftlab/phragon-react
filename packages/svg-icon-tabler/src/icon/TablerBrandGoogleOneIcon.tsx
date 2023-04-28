import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandGoogleOneIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandGoogleOneIcon = React.forwardRef<SVGSVGElement, TablerBrandGoogleOneIconProps>(
	function TablerBrandGoogleOneIcon(props, ref) {
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
				<path d="M11 5v13.982a2 2 0 0 0 4 0v-13.982a2 2 0 1 0 -4 0z" />
				<path d="M6.63 8.407a2.125 2.125 0 0 0 -.074 2.944c.77 .834 2.051 .869 2.862 .077l4.95 -4.834c.812 -.792 .846 -2.11 .076 -2.945a1.984 1.984 0 0 0 -2.861 -.077l-4.953 4.835z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandGoogleOneIcon.displayName = "TablerBrandGoogleOneIcon";
}
