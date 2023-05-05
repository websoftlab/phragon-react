import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPaintBucketIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPaintBucketIcon = React.forwardRef<SVGSVGElement, TablerPaintBucketIconProps>(
	function TablerPaintBucketIcon(props, ref) {
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
				<path d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z" />
				<path d="m5 2 5 5" />
				<path d="M2 13h15" />
				<path d="M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPaintBucketIcon.displayName = "TablerPaintBucketIcon";
}
