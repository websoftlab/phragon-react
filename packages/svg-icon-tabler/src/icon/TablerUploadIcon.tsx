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
			<path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
			<path d="M7 9l5 -5l5 5" />
			<path d="M12 4l0 12" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerUploadIcon.displayName = "TablerUploadIcon";
}
