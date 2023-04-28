import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileTypographyIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileTypographyIcon = React.forwardRef<SVGSVGElement, TablerFileTypographyIconProps>(
	function TablerFileTypographyIcon(props, ref) {
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
				<path d="M14 3v4a1 1 0 0 0 1 1h4" />
				<path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
				<path d="M11 18h2" />
				<path d="M12 18v-7" />
				<path d="M9 12v-1h6v1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFileTypographyIcon.displayName = "TablerFileTypographyIcon";
}
