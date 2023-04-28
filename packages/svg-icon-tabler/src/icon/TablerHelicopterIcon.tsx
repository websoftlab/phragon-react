import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHelicopterIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHelicopterIcon = React.forwardRef<SVGSVGElement, TablerHelicopterIconProps>(
	function TablerHelicopterIcon(props, ref) {
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
				<path d="M3 10l1 2h6" />
				<path d="M12 9a2 2 0 0 0 -2 2v3c0 1.1 .9 2 2 2h7a2 2 0 0 0 2 -2c0 -3.31 -3.13 -5 -7 -5h-2z" />
				<path d="M13 9l0 -3" />
				<path d="M5 6l15 0" />
				<path d="M15 9.1v3.9h5.5" />
				<path d="M15 19l0 -3" />
				<path d="M19 19l-8 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHelicopterIcon.displayName = "TablerHelicopterIcon";
}
