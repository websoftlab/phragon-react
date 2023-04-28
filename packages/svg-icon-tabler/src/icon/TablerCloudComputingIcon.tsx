import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCloudComputingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCloudComputingIcon = React.forwardRef<SVGSVGElement, TablerCloudComputingIconProps>(
	function TablerCloudComputingIcon(props, ref) {
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
				<path d="M6.657 16c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878" />
				<path d="M12 16v5" />
				<path d="M16 16v4a1 1 0 0 0 1 1h4" />
				<path d="M8 16v4a1 1 0 0 1 -1 1h-4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCloudComputingIcon.displayName = "TablerCloudComputingIcon";
}
