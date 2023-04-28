import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPlayerRecordFilledIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPlayerRecordFilledIcon = React.forwardRef<SVGSVGElement, TablerPlayerRecordFilledIconProps>(
	function TablerPlayerRecordFilledIcon(props, ref) {
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
				<path d="M8 5.072a8 8 0 1 1 -3.995 7.213l-.005 -.285l.005 -.285a8 8 0 0 1 3.995 -6.643z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPlayerRecordFilledIcon.displayName = "TablerPlayerRecordFilledIcon";
}
