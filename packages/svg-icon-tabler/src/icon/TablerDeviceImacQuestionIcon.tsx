import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceImacQuestionIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceImacQuestionIcon = React.forwardRef<SVGSVGElement, TablerDeviceImacQuestionIconProps>(
	function TablerDeviceImacQuestionIcon(props, ref) {
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
				<path d="M14 17h-10a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7.5" />
				<path d="M3 13h11.5" />
				<path d="M8 21h7" />
				<path d="M10 17l-.5 4" />
				<path d="M14 17l.5 4" />
				<path d="M19 22v.01" />
				<path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDeviceImacQuestionIcon.displayName = "TablerDeviceImacQuestionIcon";
}
