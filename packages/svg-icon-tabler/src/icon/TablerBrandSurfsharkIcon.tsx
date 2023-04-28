import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandSurfsharkIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandSurfsharkIcon = React.forwardRef<SVGSVGElement, TablerBrandSurfsharkIconProps>(
	function TablerBrandSurfsharkIcon(props, ref) {
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
				<path d="M19.954 9.447c-.237 -6.217 0 -6.217 -6 -6.425c-5.774 -.208 -6.824 1 -7.91 5.382c-2.884 11.816 -3.845 14.716 4.792 11.198c9.392 -3.831 9.297 -5.382 9.114 -10.155z" />
				<path d="M8 16h.452c1.943 .007 3.526 -1.461 3.543 -3.286v-2.428c.018 -1.828 1.607 -3.298 3.553 -3.286h.452" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandSurfsharkIcon.displayName = "TablerBrandSurfsharkIcon";
}
