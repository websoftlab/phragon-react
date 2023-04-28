import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAlignBoxTopLeftFilledIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAlignBoxTopLeftFilledIcon = React.forwardRef<SVGSVGElement, TablerAlignBoxTopLeftFilledIconProps>(
	function TablerAlignBoxTopLeftFilledIcon(props, ref) {
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
				<path d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005 .195v12.666c0 1.96 -1.537 3.56 -3.472 3.662l-.195 .005h-12.666a3.667 3.667 0 0 1 -3.662 -3.472l-.005 -.195v-12.666c0 -1.96 1.537 -3.56 3.472 -3.662l.195 -.005h12.666zm-9.333 3a1 1 0 0 0 -1 1v6l.007 .117a1 1 0 0 0 1.993 -.117v-6l-.007 -.117a1 1 0 0 0 -.993 -.883zm3 0a1 1 0 0 0 -1 1v4l.007 .117a1 1 0 0 0 1.993 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883zm-6 0a1 1 0 0 0 -1 1v2l.007 .117a1 1 0 0 0 1.993 -.117v-2l-.007 -.117a1 1 0 0 0 -.993 -.883z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAlignBoxTopLeftFilledIcon.displayName = "TablerAlignBoxTopLeftFilledIcon";
}
