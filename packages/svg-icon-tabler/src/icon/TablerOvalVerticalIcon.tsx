import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerOvalVerticalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerOvalVerticalIcon = React.forwardRef<SVGSVGElement, TablerOvalVerticalIconProps>(
	function TablerOvalVerticalIcon(props, ref) {
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
				<path d="M3 12c0 -3.314 4.03 -6 9 -6s9 2.686 9 6s-4.03 6 -9 6s-9 -2.686 -9 -6z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerOvalVerticalIcon.displayName = "TablerOvalVerticalIcon";
}
