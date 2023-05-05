import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerUploadIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerUploadIcon = React.forwardRef<SVGSVGElement, TablerUploadIconProps>(function TablerUploadIcon(
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
			<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
			<path d="M17 8 L12 3 L7 8" />
			<path d="M12 3 L12 15" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerUploadIcon.displayName = "TablerUploadIcon";
}
