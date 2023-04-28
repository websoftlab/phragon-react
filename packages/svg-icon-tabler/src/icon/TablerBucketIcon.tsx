import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBucketIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBucketIcon = React.forwardRef<SVGSVGElement, TablerBucketIconProps>(function TablerBucketIcon(
	props,
	ref
) {
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
			<path d="M12 7m-8 0a8 4 0 1 0 16 0a8 4 0 1 0 -16 0" />
			<path d="M4 7c0 .664 .088 1.324 .263 1.965l2.737 10.035c.5 1.5 2.239 2 5 2s4.5 -.5 5 -2c.333 -1 1.246 -4.345 2.737 -10.035a7.45 7.45 0 0 0 .263 -1.965" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBucketIcon.displayName = "TablerBucketIcon";
}
