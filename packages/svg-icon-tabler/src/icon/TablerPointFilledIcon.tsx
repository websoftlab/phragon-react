import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPointFilledIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPointFilledIcon = React.forwardRef<SVGSVGElement, TablerPointFilledIconProps>(
	function TablerPointFilledIcon(props, ref) {
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
				<path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPointFilledIcon.displayName = "TablerPointFilledIcon";
}
