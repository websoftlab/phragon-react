import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerOvalVerticalFilledIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerOvalVerticalFilledIcon = React.forwardRef<SVGSVGElement, TablerOvalVerticalFilledIconProps>(
	function TablerOvalVerticalFilledIcon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				fill="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				strokeWidth={0}
				stroke="none"
			>
				<path d="M12 5c-5.457 0 -10 3.028 -10 7s4.543 7 10 7s10 -3.028 10 -7s-4.543 -7 -10 -7z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerOvalVerticalFilledIcon.displayName = "TablerOvalVerticalFilledIcon";
}
